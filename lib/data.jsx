import axios from "axios";
import { headers } from "next/headers";

function stripUrlHost(value) {
  if (!value) return "";
  return String(value).replace(/^https?:\/\//, "").replace(/^www\./, "");
}

/** Host for API calls — safe when `host` is missing (e.g. some build / metadata paths). */
export function getDomain() {
  const headersList = headers();
  const host = headersList.get("host") ?? "";

  if (!host || host.includes("localhost")) {
    const fallback =
      process.env.NEXT_PUBLIC_VERCEL_URL ||
      process.env.VERCEL_URL ||
      "localhost";
    return stripUrlHost(fallback) || "localhost";
  }

  return host.replace(/^www\./, "");
}

export async function getData() {
  const base = process.env.CONTRIB_API1;
  if (!base || base === "undefined") {
    throw new Error(
      "Missing CONTRIB_API1. Add it in Vercel: Project → Settings → Environment Variables (required for build: generateMetadata calls getData)."
    );
  }

  const domain = getDomain();
  const url = `${base}&domain=${domain}`;
  const res = await fetch(url, {
    mode: "cors",
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch domain data (${res.status}). Check CONTRIB_API1 and network.`);
  }

  return res.json();
}

export async function getScript(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.log("error getScript", e);
    return { error: "error getScript" };
  }
}

export async function getBlogs() {
  const base = process.env.GET_BLOGS;
  if (!base || base === "undefined") {
    throw new Error(
      "Missing GET_BLOGS. Add it in Vercel: Project → Settings → Environment Variables."
    );
  }

  const domain = getDomain();
  const url = `${base}&domain=${domain}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs (${res.status}). Check GET_BLOGS.`);
  }

  return res.json();
}
