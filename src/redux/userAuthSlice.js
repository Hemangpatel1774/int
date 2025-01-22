import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    FirstName : '',
    LastName : '',
    Image : '',
    MobileNumber : '',
    Gender: '',
    Email : '',
    Dob : '',
    City: '',
    ZipCode :'',
    Address: '',
    Position: '',
    AdharCard: '',
    CurrentSalary: '',
    ExpectedSalary: '',
    NoticePeriod: '',
    JobChangeReason : '',
    Words : '',
}
const userAuthSlice = createSlice({
    name: "userAuthSlice",
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.MobileNumber = +action.payload;
        },
        setForm: (state,action) => {
            state.FirstName = action.payload.firstName;
            state.LastName = action.payload.lastName;
            state.Image = action.payload.image;
            state.Email = action.payload.email;
            state.Gender = action.payload.gender;
            state.Dob = action.payload.dob;
        },
        setPosition: (state, action) => {
            state.Position = action.payload;
        },
        setAdditional: (state, action) => {
            state.AdharCard = action.payload.adharCard;
            state.City = action.payload.city;
            state.ZipCode = action.payload.zipCode;
            state.Address = action.payload.address;
        },
        setRelavant: (state, action) => {
            state.CurrentSalary = action.payload.currentSalary;
            state.ExpectedSalary = action.payload.expectedSalary;
            state.NoticePeriod = action.payload.noticePeriod;
            state.JobChangeReason = action.payload.jobChangeReason;
            state.Words = action.payload.words;
        },
    }

})
export const {setForm,setNumber, setAdditional , setPosition ,setRelavant} = userAuthSlice.actions;
export default userAuthSlice.reducer;