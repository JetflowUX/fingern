#!/bin/bash

# Apply RLS policies to Supabase database
# Usage: ./apply-policies.sh <database-password>

if [ -z "$1" ]; then
  echo "Error: Database password required"
  echo "Usage: ./apply-policies.sh <database-password>"
  exit 1
fi

PASSWORD="$1"

echo "Applying RLS policies to site_settings table..."

PGPASSWORD="$PASSWORD" psql \
  -h db.lwdzqwwguhhitgwpdifz.supabase.co \
  -p 5432 \
  -U postgres \
  -d postgres \
  -f supabase/migrations/20251219100000_add_site_settings_policies.sql

if [ $? -eq 0 ]; then
  echo "✓ RLS policies applied successfully!"
else
  echo "✗ Failed to apply policies"
  exit 1
fi
