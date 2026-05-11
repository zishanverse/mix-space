import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic generic destructuring mapped to the ContactSubmission model
    const { 
      type, 
      name, 
      email, 
      message, 
      reason, 
      companyName, 
      companyStage, 
      hearAboutUs 
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    // Save to Database using Prisma
    const submission = await prisma.contactSubmission.create({
      data: {
        type: type || "project-enquiry",
        name,
        email,
        message,
        reason,
        companyName,
        companyStage,
        hearAboutUs,
      },
    });

    return NextResponse.json({ success: true, id: submission.id }, { status: 200 });
  } catch (error: any) {
    console.error("DATABASE_ERROR during contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error while saving submission.", details: error.message },
      { status: 500 }
    );
  }
}
