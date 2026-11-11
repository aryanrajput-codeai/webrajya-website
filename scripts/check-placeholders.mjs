/**
 * Build & Startup Verification Script for WebRajya Legal Placeholders
 * 
 * Verifies that all required legal placeholders ([PLACEHOLDER]) are tracked.
 * Refuses to let LEGAL_APPROVED be set to true while ANY placeholder remains.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const legalConfigFile = path.join(rootDir, 'src', 'config', 'legal.ts');

if (!fs.existsSync(legalConfigFile)) {
  console.error('❌ Error: src/config/legal.ts not found.');
  process.exit(1);
}

const content = fs.readFileSync(legalConfigFile, 'utf-8');

// Extract LEGAL_APPROVED boolean value
const approvedMatch = content.match(/LEGAL_APPROVED:\s*(true|false)/);
const isLegalApproved = approvedMatch ? approvedMatch[1] === 'true' : false;

// Regex to find all keys and string values in LEGAL_CONFIG
const configBlockMatch = content.match(/export const LEGAL_CONFIG[^{]*{([\s\S]*?)};/);
if (!configBlockMatch) {
  console.error('❌ Error: Could not parse LEGAL_CONFIG in src/config/legal.ts');
  process.exit(1);
}

const configBlock = configBlockMatch[1];
const placeholderRegex = /([A-Z0-9_]+):\s*"([^"]*\[[^\]]+\][^"]*)"/g;

const remainingPlaceholders = [];
let match;
while ((match = placeholderRegex.exec(configBlock)) !== null) {
  remainingPlaceholders.push({
    key: match[1],
    value: match[2]
  });
}

// Also check all files under src/app/(legal routes) for any hardcoded unescaped [PLACEHOLDERS]
const legalPages = [
  'src/app/privacy-policy/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/subscription-terms/page.tsx',
  'src/app/refund-policy/page.tsx',
  'src/app/lifetime-terms/page.tsx',
  'src/app/data-retention/page.tsx',
  'src/app/support-sla/page.tsx'
];

const filePlaceholders = [];
for (const relPath of legalPages) {
  const fullPath = path.join(rootDir, relPath);
  if (fs.existsSync(fullPath)) {
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    // Look for raw bracketed text that is NOT a JSX tag or typescript annotation
    // e.g. "[SOME PLACEHOLDER]"
    const rawMatches = fileContent.match(/\[([A-Z0-9_\s,]+)\]/g) || [];
    for (const raw of rawMatches) {
      if (!filePlaceholders.includes(raw)) {
        filePlaceholders.push(raw);
      }
    }
  }
}

console.log('====================================================');
console.log(' WebRajya Legal Policy Placeholder Audit');
console.log('====================================================');
console.log(`Current Flag: LEGAL_APPROVED = ${isLegalApproved}`);
console.log(`Total Config Placeholders Found: ${remainingPlaceholders.length}`);
console.log('----------------------------------------------------');

if (remainingPlaceholders.length > 0) {
  console.log('REMAINING UNRESOLVED PLACEHOLDERS IN CONFIG:');
  remainingPlaceholders.forEach(({ key, value }, idx) => {
    console.log(`  ${idx + 1}. ${key.padEnd(28)} -> ${value}`);
  });
} else {
  console.log('✅ No unresolved [PLACEHOLDERS] found in LEGAL_CONFIG.');
}

console.log('----------------------------------------------------');

// Strict Gate: refuse build / approval if LEGAL_APPROVED === true while placeholders exist
if (isLegalApproved && remainingPlaceholders.length > 0) {
  console.error('\n🚨 FATAL ERROR: LEGAL_APPROVED is set to TRUE, but the following placeholders remain unresolved:');
  remainingPlaceholders.forEach(({ key, value }) => {
    console.error(`  - ${key}: ${value}`);
  });
  console.error('\nRefusing build/startup. Please resolve all placeholders and obtain lawyer review before setting LEGAL_APPROVED = true.\n');
  process.exit(1);
}

if (isLegalApproved && remainingPlaceholders.length === 0) {
  console.log('✅ PASS: LEGAL_APPROVED is true and all placeholders have been resolved.\n');
  process.exit(0);
}

console.log('ℹ️  LEGAL_APPROVED is false (Draft Mode). Placeholders will appear highlighted on the website.');
console.log('====================================================\n');
process.exit(0);

