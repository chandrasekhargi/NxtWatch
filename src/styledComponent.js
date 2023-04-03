import styled from 'styled-components'

export const LoginForm = styled.form`
  background-color: #ffffff;
  box-shadow: 1px 2px 5px 5px #f1f1f1;
  padding: 20px;
  border: none;
  width: 25%;
`
export const CheckboxBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 0px;
`

export const GamingListItem = styled.li`
  margin-bottom: 30px;
  margin-right: 15px;
  list-style-type: none;
  margin-left: 0px;
`

export const TrendingListItem = styled.li`
  margin-bottom: 30px;
  list-style-type: none;
`

export const TrendingTitle = styled.p`
  color: '#181818';
  font-family: 'Roboto';
  font-size: 15px;
  text-align: left;
  margin-bottom: 0px;
`

export const ContentTypeHeading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 25px;
  margin-left: 15px;
`

export const FlexBtnContainerWithMargin = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.TxtColor};
`

export const LogOutBtn = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => props.color};
  border-radius: 4px;
  border: ${props => props.btnBorder};
  background-color: ${props => props.bgColor};
  cursor: pointer;
`

export const PopUpContainerWithSpace = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
`

export const ContainerWithSpace = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const TrendingCountContainer = styled.div`
  display: flex;
`

export const GamingHeading = styled.div`
  display: flex;
  flex-direction: column;
`

export const OnlyFlexWithBorder = styled.div`
  display: flex;
  align-items: center;
  border-top: 2px solid #000000;
`

export const TrendingHeading = styled.div`
  display: flex;
  align-items: center;
`

export const GamingItemImg = styled.img`
  height: 400px;
  width: 300px;
`

export const TrendingItemImg = styled.img`
  height: 200px;
  width: 300px;
  margin-right: 10px;
`

export const SmallImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 20px;
`

export const TrendingCountViews = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #7e858e;
  margin-right: 10px;
  text-align: left;
  margin-bottom: 0px;
  margin-top: 5px;
`

export const TrendingUnorderedRowContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0px;
  padding-left: 0px;
  height: 100vh;
  overflow: auto;
`

export const ParaEle = styled.p`
  margin-bottom: 0px;
  margin-top: 10px;
`

export const TrendingUnorderedColumnContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  width: 100%;
  height: 100vh;
    overflow: auto;
}
`

export const GamingColumnItemBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
`

export const TrendingVideoItemBtn = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
