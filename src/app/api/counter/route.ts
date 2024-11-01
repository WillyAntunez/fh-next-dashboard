import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  return NextResponse.json({
    count: 100,
  });
}

export async function POST(req: Request, res: Response) {}

export async function PUT(req: Request, res: Response) {}

export async function DELETE(req: Request, res: Response) {}
