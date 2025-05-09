﻿import { Database } from "./supabase"

export interface UserDetails {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
}

export type Wine = Database["public"]["Tables"]["wines"]["Row"]
export type Producer = Database["public"]["Tables"]["producers"]["Row"]
export type Country = Database["public"]["Tables"]["countries"]["Row"]
export type Region = Database["public"]["Tables"]["regions"]["Row"]

