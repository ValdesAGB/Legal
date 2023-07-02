import React from 'react'
import styled from 'styled-components'

function Formulaire() {
  const Form = styled.form`
    color: #999999;
  `
  const Input = styled.input`
    color: #999999;
    background-color: #f5f5f5;
    border: none;
    &:focus {
      border: none;
      background-color: #f5f5f5;
      box-shadow: none;
    }

    &::placeholder {
      color: #999999;
    }
  `
  const Select = styled.select`
    color: #999999;
    background-color: #f5f5f5;
    border: none;
    &:focus {
      border: none;
      background-color: #f5f5f5;
      box-shadow: none;
    }
  `

  const TextArea = styled.textarea`
    color: #999999;
    background-color: #f5f5f5;
    border: none;
    &:focus {
      border: none;
      background-color: #f5f5f5;
      box-shadow: none;
    }
    &::placeholder {
      color: #999999;
    }
  `

  const Button = styled.button`
    font-family: 'Open Sans', sans-serif;
    background-color: #d8ae76;
    color: #ffffff;
    border-radius: 6px;
    border: none;
    font-weight: 700;

    transition: background-color 500ms linear, color 600ms;
    &:hover {
      background-color: black;
      color: white;
    }

    @media (min-width: 320px) {
      padding: 5% 10% 5% 10%;
      font-size: 0.9em;
    }
    @media (min-width: 768px) {
      padding: 3% 10% 3% 10%;
      font-size: 1em;
    }
    @media (min-width: 2560px) {
      padding: 2% 10% 2% 10%;
      font-size: 1em;
    }
  `
  return (
    <React.Fragment>
      <Form className="mt-5">
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
