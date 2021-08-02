import styled from 'styled-components';

export const StyledQuestion = styled.div`
	background: #fefefe;
	border-radius: 8px;
	box-shadow:0 2px 12px rgba(0, 0, 0, 0.04);
	padding:24px;

   // & -> é usado para referenciar a si mesmo (this), no caso abaixo, toda .question que vier após uma primeira .question usará as propriedades descritas
   & + .question {
      margin-top: 8px;
   }
   
   &.highlighted {
      background: #f4f0ff;
      border: 1px solid #835afd;

      footer .user-info span {
         color: #29292e;
      }
   }

   &.answered {
      background: #DCDCDD;
   }

	p {
		color: #29292e;
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
            border: 2px solid #835AFD;
            border-radius: 30%;
            width:32px;
            height:32px;
         }
               

         span {
            margin-left: 8px;
            color: #737380;
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
            color: #737380;
            gap: 8px;

            &.liked {
               color: #835afd;

               svg path {
                  stroke: #835afd;
               }
            }
         }

         
         &:hover {
            filter: brightness(0.7);
         }
      }

   }
`;

