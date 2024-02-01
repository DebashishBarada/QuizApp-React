import './Register.css'
import { Button, FormControl } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { SendRounded } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { InputLabel, MenuItem, Select } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import axios from "axios";

function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [organization, setOrganization] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayEmailPage, setDisplayEmailPage] = useState(true)
    const [loadingButton, setLoadingButton] = useState(false)
    let userCheckURL = 'http://localhost:4000/checkUser?userEmail='
    let registerUserURL = 'http://localhost:4000/inputUserDetails'

    function submitEmailForm() {
        console.log(firstName, lastName, organization, dateOfBirth,dateOfBirth.$d.toISOString().substring(0,10) , typeof(dateOfBirth.$d))  
        const formData = {
            'First_Name':firstName,
            'Last_Name':lastName,
            'Organization':organization,
            'Date_of_Birth':dateOfBirth,
            'Email':email,
            'Password':password
        }
        registerUser(formData)
        setLoadingButton(true)
        setTimeout(() => {
            console.log('User registered successfully!')
            console.log(formData)
            setLoadingButton(false)
        }, 2000);
    }

    const registerUser = (async (formData) => {
        try{
            const response = await axios.post(registerUserURL, formData)
            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    })

    const checkUser = (async () => {
        try {
            userCheckURL = userCheckURL + email
            console.log(userCheckURL)
            const response = await axios.get(userCheckURL)
            if (response.data.Email !== email){
                console.log('No user with similar email found')
                setLoadingButton(true)
                setTimeout(() => {
                    setDisplayEmailPage(false)
                    setLoadingButton(false)
                }, 3000);
            }
            else {
                console.log('A user with similar email id already exists!. Try with a new id')
            }
        }
        catch (error) {
            console.log('Error occured:', error)
        }
    })

    return (
        <>
            <div className="container">
                <div className='part' id='part1'>
                    {displayEmailPage ?
                        <div className='card' id='form1'>
                            <h4 className="jumbotron">Registration Page</h4>
                            <FormControl fullWidth>
                                <div className='form-group' id='email'>
                                    <TextField id='outlined-basic-email' label='Email' variant='outlined' type='email' onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <TextField id='outlined-basic-password' label='Password' variant='outlined' type='password' onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <TextField id='outlined-basic-confirm-password' label='Confirm Password' variant='outlined' type='password' onChange={(event) => setConfirmPassword(event.target.value)} />
                                </div>
                                <LoadingButton onClick={checkUser} variant='contained' loading={loadingButton} loadingIndicator={'Checking user'}>Next</LoadingButton>
                            </FormControl>
                        </div> :
                        <div className='card' id='form2'>
                            <FormControl fullWidth>
                                <h4 className="jumbotron">Registration Page</h4>
                                <div className='form-group'>
                                    <div className='name-row'>
                                        <TextField className='name' id="outlined-basic first-name" label="First Name" variant="outlined" value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)} />
                                        <TextField className='name' id="outlined-basic last-name" label="Last Name" variant="outlined" value={lastName}
                                            onChange={(event) => setLastName(event.target.value)} />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker className='date-of-birth' value={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />
                                    </LocalizationProvider>
                                </div>
                                <div className='form-group'>
                                    <TextField className='organization' id="outlined-basic" label="Organization" variant="outlined" value={organization}
                                        onChange={(event) => setOrganization(event.target.value)} />
                                </div>
                                <LoadingButton onClick={submitEmailForm} variant='contained' loading={loadingButton} loadingIndicator={'Submitting'}>Submit</LoadingButton>
                                {/* <div> */}
                                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                // value={age}
                                // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select> */}
                                {/* </div> */}
                            </FormControl>
                        </div>
                    }
                </div>
                <div className='part' id='part2'>
                    <h4 className='jumbotron'>Hello</h4>
                </div>
            </div>
        </>
    )
}

export default Register