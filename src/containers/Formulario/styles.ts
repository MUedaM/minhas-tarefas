import styled from 'styled-components'
import Colors from '../../styles/colors'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.colorInput};

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 8px;
  }
`

export const AlertsOption = styled.div`
  display: inline;
`
