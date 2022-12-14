import styled from 'styled-components'

export const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
    justify-content: space-evenly;
`;
export  const Container0 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 200px;
    // hight: 100px;
    box-shadow: 0 3px 10px 0 #aaa;
`;
export const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  `;
export const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 12px;
`;
export const Text = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;
export const Containers = styled.div`
  display: flex;
  flex-direction: column;
`;