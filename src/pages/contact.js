import React from 'react';
import Layout from "../components/layout"
import styled from "styled-components"
import { useForm } from 'react-hook-form';

const Contact = styled.div`
display: flex;
justify-content: center;
`

const FieldSet = styled.fieldset`
border: 0px;
witdh: 100px
`

const Input = styled.input`
padding: 3px;
font-size: 14px;
font-weight: 600;
@media (min-width: 600px){
    width: 500px;
}
width: 300px;
`

const TextField = styled.textarea`
@media (min-width: 600px){
    width: 500px;
}
width: 300px;
`

const FormLabel = styled.label`
color: darkblue;
font-weight: bold;
display: block;
`

const Button = styled.button`
padding: 2px 10px;
color: white;
background-color: darkblue;
border-radius: 10%;
border: none;
`

const ClearButton = styled.input`
padding: 2px 10px;
color: white;
background-color: darkred;
border-radius: 10%;
border: none;
`


const onSubmit = (data) => { console.log(data) }

const Contact_FN = () => {
    const { register,
        handleSubmit,
    } = useForm();
    const showForm = (
        <Contact>
            <form method="post" action="https://getform.io/f/2d5919bc-f47f-4eaa-813b-babfa8383248" onSubmit={handleSubmit(onSubmit)}>
                <FieldSet>
                    <p>
                        <FormLabel>
                            Name
                        </FormLabel>
                        <Input type="text" name="name" id="name" placeholder="enter your name" {...register('name', {
                            required: true,
                        })} />
                    </p>
                    <p>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <Input type="email" name="email" id="email" placeholder="your@email.address" {...register('email', {
                            required: true,
                            pattern:
                                // From https://emailregex.com/index.html
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                    </p>
                    <p>
                        <FormLabel>
                            Subject
                        </FormLabel>
                        <Input type="text" name="subject" id="subject" placeholder="subject" {...register('subject', {
                            required: true,
                        })} />
                    </p>
                    <p>
                        <FormLabel>
                            Message
                        </FormLabel>
                        <TextField name="message" id="message" rows="6" placeholder="your message" {...register('message', {
                            required: true,
                        })} />
                    </p>
                    <Button type="submit">Send</Button>
                    <ClearButton type="reset" value="Clear" />
                </FieldSet>
            </form>
        </Contact >
    )
    return (<Layout>
        {showForm}
    </Layout>)
}

export default Contact_FN
