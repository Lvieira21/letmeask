import styled from 'styled-components';

export const StyledQuestion = styled.div`
	background: ${props => props.theme.colors.questionBackground};
	border-radius: 8px;
	box-shadow:0 2px 12px rgba(0, 0, 0, 0.04);
	padding:24px;

   // & -> é usado para referenciar a si mesmo (this), no caso abaixo, toda .question que vier após uma primeira .question usará as propriedades descritas
   & + .question {
      margin-top: 8px;
   }
   
   &.highlighted {
      background: ${props => props.theme.colors.questionHighlighted};
      border: 1px solid ${props => props.theme.colors.questionAccent};

      footer .user-info span {
         color: ${props => props.theme.colors.text};
      }
   }

   &.answered {
      background: ${props => props.theme.colors.questionAnswered};
   }

	p {
		color: ${props => props.theme.colors.text};
	}

   footer {
      display: flex;
      justify-content: space-between;
      align-items:center;
      margin-top: 24px;

      .user-info {
         display: flex;
         align-items: center;

         img {
            border: 2px solid ${props => props.theme.colors.questionAccent};
            border-radius: 30%;
            width:32px;
            height:32px;
         }
               

         span {
            margin-left: 8px;
            color: ${props => props.theme.colors.subtext};
            font-size: 14px;
         }
      }

      > div {
         display: flex;
         gap: 16px;
      }

      button {
         border: 0;
         background: transparent;
         cursor: pointer;
         transition: filter 0.3s;

         &.like-button {
            display:flex;
            align-items: flex-end;
            color:${props => props.theme.colors.subtext};
            gap: 8px;

            &.liked {
               color: ${props => props.theme.colors.questionAccent};

               svg path {
                  stroke: ${props => props.theme.colors.questionAccent};
               }
            }
         }

         
         &:hover {
            filter: brightness(0.7);
         }
      }

   }
`;


