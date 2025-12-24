-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert for site_settings" ON public.site_settings;
DROP POLICY IF EXISTS "Allow public update for site_settings" ON public.site_settings;

-- Allow anyone to insert/update site settings for now
-- In production, this should be restricted to authenticated admins
CREATE POLICY "Allow public insert for site_settings"
ON public.site_settings
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update for site_settings"
ON public.site_settings
FOR UPDATE
USING (true)
WITH CHECK (true);
