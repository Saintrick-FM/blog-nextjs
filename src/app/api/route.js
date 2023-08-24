import { NextResponse } from "next/server";
const usernamesArray = [];

export async function GET(request) {
  const response = NextResponse();
  return response.json({ message: "Username added successfully" });
}

// export async function POST(request, response) {
//   const { github_username } = request.body;

//   if (!github_username) {
//     return response.status(400).json({ error: "Missing github_username" });
//   }

//   usernamesArray.push(github_username);

//   return response.status(200).json({ message: "Username added successfully" });
// }
