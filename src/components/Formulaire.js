import React from 'react'
import styled from 'styled-components'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const Form = styled.form`
  color: ${color.aboutTextColor};
  margin-top: 5rem;
`
const Input = styled.input`
  color: ${color.aboutTextColor};
  background-color: ${color.inputBgColor};
  border: none;
  color: black;
  &:focus {
    border: none;
    background-color: ${color.inputBgColor};
    box-shadow: none;
  }

  &::placeholder {
    color: ${color.aboutTextColor};
  }
`
const Select = styled.select`
  color: ${color.aboutTextColor};
  background-color: ${color.inputBgColor};
  border: none;
  &:focus {
    border: none;
    background-color: ${color.inputBgColor};
    box-shadow: none;
  }
`

const TextArea = styled.textarea`
  color: ${color.aboutTextColor};
  background-color: ${color.inputBgColor};
  border: none;
  &:focus {
    border: none;
    background-color: ${color.inputBgColor};
    box-shadow: none;
  }
  &::placeholder {
    color: ${color.aboutTextColor};
  }
`

const Button = styled.button`
  font-family: ${police.second};
  color: ${color.main};
  border-radius: 6px;
  border: none;
  font-weight: 700;
  background-color: ${color.homeBtnColor};
  transition: background-color 500ms linear, color 600ms;
  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    background-color: black !important;
    color: white !important;
  }

  padding: 5% 10%;
  font-size: 0.9em;

  @media (min-width: 576px) {
    padding: 2.5% 10%;
    font-size: 1em;
  }

  @media (min-width: 768px) {
    padding: 3% 10% 3% 10%;
    font-size: 1em;
  }
  @media (min-width: 1400px) {
    padding: 2% 10% 2% 10%;
    font-size: 1em;
  }
`

function Formulaire() {
  return (
    <React.Fragment>
      <Form>
        <div className="row mb-4">
          <div className="col-lg mb-4 mb-lg-0">
            <Input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Your Name"
            />
          </div>
          <div className="col-lg">
            <Input
              type="email"
              className="form-control "
              id="name"
              aria-describedby="emailHelp"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="mb-4">
          <Select className="form-select" aria-label="Default select example">
            <option value="0">Pratice Area</option>
            <option value="1">Criminal Law</option>
            <option value="2">International Law</option>
            <option value="3">Financial Law</option>
          </Select>
        </div>
        <div className="mb-4">
          <TextArea
            className="form-control"
            placeholder="Your Message"
            id="floatingTextarea"
            rows={6}
          ></TextArea>
        </div>

        <Button
          type="submit"
          className="btn"
          onClick={(e) => e.preventDefault()}
        >
          SEND REQUEST
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default Formulaire
