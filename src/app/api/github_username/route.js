import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Nom d'utilisateur github recupéré",
      success: true,
    });
    let github_username_cookie = response.cookies.get("github_username");
    let user_data_cookie = response.cookies.get("user_data");
    console.log(
      "github_username_cookie = ",
      github_username_cookie,
      " user_data_cookie = ",
      user_data_cookie
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log("reqBody = ", reqBody);
    const result = await fetchGithubUserData(reqBody.github_username);
    console.log("result = ", result);
    const response = NextResponse.json({
      success: true,
      user_data:result.user_data
    });
    result.success &&
      response.cookies.set("github_username", reqBody.github_username, {
        httpOnly: true,
      });
    result.success &&
      response.cookies.set("user_data", JSON.stringify(result.user_data), { httpOnly: true });

    return response;
  } catch (error) {
    console.log("error = ", error);
    return NextResponse.json({ success: false });
  }
}

const fetchGithubUserData = async (github_username) => {
  console.log("test ", github_username);
  try {
    // const state = getState();
    const response = await fetch(
      `https://api.github.com/users/${github_username}`
    );
    console.log("github_username = ", github_username);
    if (response.ok) {
      const userData = await response.json();
      console.log("ok fetch user data userData = ", userData);
      return { success: true, user_data: userData };
    } else {
      console.error("Failed to fetch user data");
      return { success: false };
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false };
  }
};
