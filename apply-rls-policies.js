import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env file');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function applyPolicies() {
    console.log('Applying RLS policies to site_settings table...');

    // Create INSERT policy
    const { error: insertError } = await supabase.rpc('exec_sql', {
        sql: `CREATE POLICY IF NOT EXISTS "Allow public insert for site_settings" ON public.site_settings FOR INSERT WITH CHECK (true);`
    });

    if (insertError) {
        console.error('Error creating INSERT policy:', insertError);
    } else {
        console.log('✓ INSERT policy created successfully');
    }

    // Create UPDATE policy
    const { error: updateError } = await supabase.rpc('exec_sql', {
        sql: `CREATE POLICY IF NOT EXISTS "Allow public update for site_settings" ON public.site_settings FOR UPDATE USING (true) WITH CHECK (true);`
    });

    if (updateError) {
        console.error('Error creating UPDATE policy:', updateError);
    } else {
        console.log('✓ UPDATE policy created successfully');
    }

    console.log('\nDone! You can now use the Admin Panel to update settings.');
}

applyPolicies();
