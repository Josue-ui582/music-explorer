import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: any // <-- on met any ici pour contourner temporairement le problème
) {
  const { id } = context.params;

  try {
    const res = await fetch(`https://api.deezer.com/artist/${id}/top?limit=10`);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Erreur lors de la récupération des morceaux" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Erreur réseau ou inconnue" },
      { status: 500 }
    );
  }
}