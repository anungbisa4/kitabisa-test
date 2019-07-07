import Styled from 'styled-components';

const ChooseButton = Styled.div`
    .input-group {
          background: #14D2B8;
          display: block;
          position: relative;
          border-radius: 3.25rem;
          font-size: 14px;
          font-weight: bold;
          label {
            padding: 0.475rem .75rem;
            width: 100%;
            display: block;
            text-align: center;
            color: #1C162E;
            cursor: pointer;
            position: relative;
            z-index: 2;
            transition: color 200ms ease-in;
            overflow: hidden;
            border-radius: 3.25rem;

            &:before {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              content: '';
              background-color: #7DFFED;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%) scale3d(1, 1, 1);
              transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
              opacity: 0;
              z-index: -1;
            }
          }

          > input:checked ~ label {
            color: #1C162E;

            &:before {
              transform: translate(-50%, -50%) scale3d(56, 56, 1);
              opacity: 1;
              border-radius: 3.25rem;
            }

            &:after {
              background-color: #7DFFED;
              border-color: #7DFFED;
            }
          }

          > input {
            width: 32px;
            height: 32px;
            order: 1;
            z-index: 2;
            position: absolute;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            visibility: hidden;
          }
        }

    .form-control {
      border-radius: 2.25rem;
      border: none;
      background-color: #332D43;
      color: #DADADA;
      font-size: 12px;
    }
    .rounded {
      background: rgb(2,0,36);
      background: linear-gradient(147deg, rgba(2,0,36,1) 0%, rgba(165,115,255,1) 0%, rgba(90,123,239,1) 100%);
      border-radius: 2.25rem !important;
      border: none;
      font-size: 14;
      font-weight: bold;
      letter-spacing: 1.78px;
    }
    .line {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #A25AFF;
  }
`

export default ChooseButton;