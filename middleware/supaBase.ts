
import { createClient } from '@supabase/supabase-js'
import {present} from "~/utils/typescript";

const config = useRuntimeConfig()
const supabaseUrl = 'https://rvpogsjojzncsdonvejp.supabase.co'
const supabaseKey = present(config.supabaseKey)
const supaBase = createClient(supabaseUrl, supabaseKey)
export default supaBase;