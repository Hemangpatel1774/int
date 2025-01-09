import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    fistName : '',
    lastName : '',
    image : '',
    mobileNumber : '',
    email : '',
    gender: '',
    dob : '',
    city: '',
    zipCode :'',
    address: '',
    position: '',
    adharCard: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    jobChangeReason : '',
    words : '',
}
const userAuthSlice = createSlice({
    name: "userAuthSlice",
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.mobileNumber = action.payload;
        },
        setForm: (state,action) => {
            state.fistName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.image = action.payload.image;
            state.email = action.payload.email;
            state.gender = action.payload.gender;
            state.dob = action.payload.dob;
        },
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setAdditional: (state, action) => {
            state.adharCard = action.payload.adharCard;
            state.city = action.payload.city;
            state.zipCode = action.payload.zipCode;
            state.address = action.payload.address;
        },
        setRelavant: (state, action) => {
            state.currentSalary = action.payload.currentSalary;
            state.expectedSalary = action.payload.expectedSalary;
            state.noticePeriod = action.payload.noticePeriod;
            state.jobChangeReason = action.payload.jobChangeReason;
            state.words = action.payload.words;
        },
    }

})
export const {setForm,setNumber, setAdditional , setPosition ,setRelavant} = userAuthSlice.actions;
export default userAuthSlice.reducer;