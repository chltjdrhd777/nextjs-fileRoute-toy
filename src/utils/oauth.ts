import axios from "axios";
import { v4 as uuid } from "uuid";

export const oauthHelpers = {
  async kakaoLogin() {
    await window.Kakao.Auth.login({
      success: function (response: any) {
        console.log(response, "response from loginsuccess");
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (response: any) {
            console.log(response);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  },

  async kakaoLogout() {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response: any) {
          console.log(response);
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
      window.Kakao.Auth.setAccessToken(undefined);
    }
  },

  async googleLogin() {
    try {
      const response = await window.gapi.GoogleAuthService.signIn();
      console.log(response.getBasicProfile());
    } catch (err) {
      console.log(err, "from google");
    }
  },

  async googleLogout() {
    try {
      window.gapi.GoogleAuthService.signOut().then(() => console.log("logout"));
      window.gapi.GoogleAuthService.disconnect();
    } catch (err) {
      console.log(err);
    }
  },

  async naverLogin() {
    const naverInit = new window.naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT,
      callbackUrl: process.env.REACT_APP_NAVER_REDIRECT,
      isPopup: false,
      callbackHandle: true,
    });
    naverInit.init();

    window.addEventListener("load", function () {
      naverInit.getLoginStatus(async function (status: boolean) {
        if (status) {
          let { email, nickname, profile_image } = naverInit.user;
          if (!email || !nickname || !profile_image) {
            alert("필수 정보제공에 동의해주세요");
            naverInit.reprompt();
            return;
          }
        }
        window.opener.naver["user"] = naverInit.user;
        window.close();
      });
    });
  },
  async naverLogout() {},
};
