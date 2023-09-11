import { NextResponse } from "next/server";
let current_username = "Saintrick-FM";

// export async function GET() {
//   try {
//     const response = NextResponse.json({
//       message: "Nom d'utilisateur github recupéré",
//       success: true,
//       github_username: current_username,
//     });
//     // let github_username_cookie = response.cookies.get("github_username");
//     // let user_data_cookie = response.cookies.get("user_data");
//     return response;
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

export async function POST(request) {
  try {
    const reqBody = await request.json();
    current_username = reqBody.github_username;
    const result = await fetchGithubUserData(reqBody.github_username);

    const response = NextResponse.json({
      success: true,
      user_data: result.user_data,
    });
    result.success &&
      response.cookies.set("github_username", reqBody.github_username, {
        httpOnly: true,
      });
    result.success &&
      response.cookies.set("user_data", JSON.stringify(result.user_data), {
        httpOnly: true,
      });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}

const fetchGithubUserData = async (github_username) => {
  console.log(github_username)
  try {
    const response = await fetch(
      `https://api.github.com/users/${github_username}`
    );
    // if (response.ok) {
      const userData = await response.json();
      return { success: true, user_data: userData };
    
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false , message:null};
  }
};
