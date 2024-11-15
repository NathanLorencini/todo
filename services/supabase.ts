import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qnqbucwyiczsjcxyxcsf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFucWJ1Y3d5aWN6c2pjeHl4Y3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MDgxOTUsImV4cCI6MjA0NzE4NDE5NX0.qluJjSvr8PPw-d2uRPV5vBU_Tyzr824Xo2dFUBs7Jf0";
// const supabaseUrl = "";
// const supabaseKey = "";

export const supabase = createClient(supabaseUrl, supabaseKey);
