import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import liff from "@line/liff";

//for use
const liffID = `2002643017-R1nmr6gV`;
//for Dev
//const liffID = `2002643017-BVvlLdjG`;

//BaseUrl Api use
const baseUrl =`https://games.myworld-store.com/api`;
//BaseUrl Api dev
//const baseUrl = `https://games.myworld-store.com/api-dev`;

// const leaderboardUrl = `https://games.myworld-store.com/api/mymap/leaderboardAdmin`
const leaderboardUrl = `https://games.myworld-store.com/mymap/leaderboard.json`

//Api Store 
const getprofile = `${baseUrl}/customers/customerInfo`;
const restaurantUrl = `${baseUrl}/mymap/restaurantOptions`
const restaurantOptionUrl = (restaurant_id) => `${baseUrl}/mymap/restaurantBranchOptions?restaurant_id=${restaurant_id}`
const checkinUrl = `${baseUrl}/mymap/checkInMyMap`
const uploadUrl = `${baseUrl}/mymap/uploadfile`
const checkinHisUrl = (customerid) => `${baseUrl}/mymap/checkInHistory/${customerid}`
const allCouponUrl = (customerid) => `${baseUrl}/mymap/allCoupon/${customerid}`
const updateinfoURL = `${baseUrl}/customers/customerInfo/updatePhone`
const couponUrl = `${baseUrl}/mymap/couponOptions`
const RedeemcouponUrl = `${baseUrl}/mymap/redeemCoupon`
const usecouponUrl = `${baseUrl}/mymap/useCoupon`

// const api_key = ``
const api_key = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUzMzYzNDR9.g0VSsvTajlOr_FsNiQBTuCbIUM-O24R5jCwREc_9eP0`

function mobileCheck() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4))
        || /(iPhone|iPad|iPod)/i.test(userAgent));
    const hasRedirected = sessionStorage.getItem("mobileRedirected");

    if (isMobile && !hasRedirected) {
        sessionStorage.setItem("mobileRedirected", "true");
        return true;
    }
    return false;
}

export const loginWithLine = createAsyncThunk(
    "user/loginWithLine",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const redirected = urlParams.get("redirected");

            if (mobileCheck() && !redirected) {
                let redirectUrl = `line://app/${liffID}?redirected=true`;
                window.location.href = redirectUrl;
                return;
            }

            await liff.init({ liffId: `${liffID}` });
            if (!liff.isLoggedIn()) {
                liff.login();
                return;
            }

            const profile = await liff.getProfile();
            console.log("Profile retrieved:", profile);

            dispatch(getuser({ profile }))

            return profile;

        } catch (error) {
            console.error("Login error:", error);
            return rejectWithValue(error.message || "Failed to login with LINE");
        }
    }
);

export const getuser = createAsyncThunk(
    'user/getuserData',
    async ({ profile }, { rejectWithValue }) => {
        try {
            const response = await axios.post(getprofile,
                {
                    customer_id: profile.userId,
                    name: profile.displayName,
                    picture: profile.pictureUrl,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const getbranchrestaurant = createAsyncThunk(
    'user/getbranchrestaurants',
    async ({ restaurant_id }, { rejectWithValue }) => {
        try {
            const response = await axios.get(restaurantOptionUrl(restaurant_id),
                {
                    headers: {},
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const getrestaurant = createAsyncThunk(
    'user/getrestaurants',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(restaurantUrl,
                {}
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const checkin = createAsyncThunk(
    'user/checkins',
    async (formdata, { rejectWithValue }) => {
        try {
            const response = await axios.post(checkinUrl, formdata,
                {
                    headers: {'Authorization':`${api_key}`},
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const upload = createAsyncThunk(
    'user/uploads',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(uploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // ใช้ Content-Type สำหรับการอัปโหลดไฟล์
                    'Authorization':`${api_key}`
                },
            });
            return response.data; // ส่งข้อมูลที่ได้กลับมา
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const Redeemcoupon = createAsyncThunk(
    'user/Redeemcoupons',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(RedeemcouponUrl, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`${api_key}`
                },
            });
            return response.data; // ส่งข้อมูลที่ได้กลับมา
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const usecoupon = createAsyncThunk(
    'user/usecoupons',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.post(usecouponUrl, id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`${api_key}`
                },
            });
            return response.data; // ส่งข้อมูลที่ได้กลับมา
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const leaderboard = createAsyncThunk('user/leaderboards', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(leaderboardUrl, {});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const checkinHis = createAsyncThunk('user/checkinHises', async ({ customerid }, { rejectWithValue }) => {
    try {
        const response = await axios.get(checkinHisUrl(customerid), {
            headers: {'Authorization':`${api_key}`}
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const allCoupon = createAsyncThunk('user/allCoupons', async ({ customerid }, { rejectWithValue }) => {
    try {
        const response = await axios.get(allCouponUrl(customerid), {
            headers: {'Authorization':`${api_key}`}
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const allCouponshow = createAsyncThunk('user/allCouponshows', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(couponUrl, {
            headers: {'Authorization':`${api_key}`}
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const updateinfo = createAsyncThunk('user/updateinfos', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.put(updateinfoURL, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`${api_key}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        profile: null,
        customerinfo: null,
        isLoading: false,
        error: null,
        response: null,
        allCouponsData: [],
        leaderboardsData: [],
        checkinHisesData: [],
        allCouponshowsData: [],
        getrestaurantData: [],
        getbranchrestaurantData: [],
    },
    reducers: {
        resetState: (state) => {
            state.isLoading = false;
            state.error = null;
            state.response = null;
        },
        setCustomerInfo: (state, action) => {
            state.profile = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginWithLine.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginWithLine.fulfilled, (state, action) => {
                console.log("profile Info:", action.payload);
                localStorage.setItem('profile', JSON.stringify(action.payload));
                if (action.payload) {
                    state.isLoading = false;
                    state.profile = action.payload;
                } else {
                    state.isLoading = false;
                    state.error = "Profile is undefined";
                }
            })
            .addCase(loginWithLine.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getuser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getuser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.customerinfo = action.payload;
                console.log("Customer Info:", action.payload);
                localStorage.setItem('customerinfo', JSON.stringify(action.payload));
            })
            .addCase(getuser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getbranchrestaurant.fulfilled, (state, action) => {
                state.getbranchrestaurantData = action.payload;
            })
            .addCase(getrestaurant.fulfilled, (state, action) => {
                state.getrestaurantData = action.payload;
            })
            .addCase(allCouponshow.fulfilled, (state, action) => {
                state.allCouponshowsData = action.payload;
            })
            .addCase(updateinfo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateinfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.customerinfo = action.payload;
            })
            .addCase(updateinfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state, action) => {
                    if (action.type.includes("leaderboards")) {
                        state.leaderboardsData = action.payload;
                    } else if (action.type.includes("checkinHises")) {
                        state.checkinHisesData = action.payload;
                    } else if (action.type.includes("allCoupons")) {
                        state.allCouponsData = action.payload;
                    }
                }
            )
    },
});

export const { setCustomerInfo, resetState } = userSlice.actions;

export default userSlice.reducer;