import { supabase } from "../lib/supabaseClient";

// ==========================
// ABOUT PAGE
// ==========================
export async function getAboutPageData() {
  const aboutResult = await supabase.from("about").select("*").limit(1).maybeSingle();

  if (aboutResult.error) {
    console.error("About error:", aboutResult.error);
    return null;
  }

  const highlightsResult = await supabase
    .from("about_highlights")
    .select("*")
    .order("display_order");

  const companiesResult = await supabase
    .from("companies")
    .select("*")
    .order("display_order");

  const skillsResult = await supabase
    .from("skills")
    .select("*")
    .order("display_order");

  console.log("ABOUT:", aboutResult);
  console.log("HIGHLIGHTS:", highlightsResult);
  console.log("COMPANIES:", companiesResult);
  console.log("SKILLS:", skillsResult);

  return {
    ...aboutResult.data,
    highlights: highlightsResult.data || [],
    companies: companiesResult.data || [],
    skills: (skillsResult.data || []).map((s) => s.name),
  };
}

// ==========================
// PROJECTS
// ==========================
export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order");

  if (error) {
    console.error("Projects error:", error);
    return [];
  }

  return data || [];
}

// ==========================
// EXPERIENCE
// ==========================
export async function getExperience() {
  const { data, error } = await supabase
    .from("experience")
    .select("*")
    .order("display_order");

  if (error) {
    console.error("Experience error:", error);
    return [];
  }

  return data || [];
}

// ==========================
// CONTACT
// ==========================
export async function getContact() {
  const { data, error } = await supabase
    .from("contact")
    .select("*")
    .single();

  if (error) {
    console.error("Contact error:", error);
    return null;
  }

  return data;
}

//Certificates 
export async function getCertificates() {
  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .order("display_order");

  if (error) {
    console.error("Certificates error:", error);
    return [];
  }

  return data || [];
}