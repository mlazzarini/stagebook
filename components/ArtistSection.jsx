import styled from 'styled-components'

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    border-bottom: 1px solid grey;
    padding: 24px 4px;
    color: #0070c0;
`

const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #0070c0;
  margin-bottom: 8px;
`

const SectionContent = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
`

const AddButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 50px;
  /* line-height: 50px; */
  color: #0070c0;
  border: 2px dotted #0070c0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function ArtistSection({ title, content }) {
  return (
    <StyledSection>
      <Title>{title}</Title>
      <SectionContent>
        <AddButton>+</AddButton>
      </SectionContent>
    </StyledSection>
  )
}
