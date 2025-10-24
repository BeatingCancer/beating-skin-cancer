/*
  # Newsletter Signups Table

  1. New Tables
    - `newsletter_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, not null) - Subscriber email address
      - `first_name` (text, not null) - Subscriber first name
      - `last_name` (text, not null) - Subscriber last name
      - `created_at` (timestamptz) - Timestamp when signup occurred
      - `exported_to_ionos` (boolean) - Flag to track if exported to IONOS
      
  2. Security
    - Enable RLS on `newsletter_signups` table
    - Add policy to allow anyone to insert signups (public form submission)
    - Add policy to allow authenticated users to read signups (for admin purposes)
    
  3. Indexes
    - Index on email for quick lookups
    - Index on created_at for sorting by signup date
*/

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  exported_to_ionos boolean DEFAULT false
);

ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert newsletter signups"
  ON newsletter_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read newsletter signups"
  ON newsletter_signups
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_signups_email ON newsletter_signups(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_signups_created_at ON newsletter_signups(created_at DESC);
