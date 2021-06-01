import styled from '@emotion/styled';
import { flexibleColDiv, flexibleRowDiv } from '../../Shared/styles';
import { Bold, Medium } from '../../Shared/typography';
import { BottomBlob } from '../../Shared/Assets/BottomBlob';

export const Container = styled(flexibleColDiv)({
  padding: '128px 0',
  position: 'relative',
  width: '100%',
});

export const Heading = styled.p({
  fontSize: '3rem',
  fontWeight: Bold,
  textAlign: 'center',
  padding: '0px 48px',
});

export const EmailContainer = styled.a({
  margin: 'auto',
  marginTop: '48px',
});

export const Email = styled.p({
  fontWeight: Medium,
  fontSize: '1.125rem',
  textAlign: 'center',
});

export const Contact = styled(flexibleRowDiv)({
  width: '74px',
  marginTop: '24px',
  justifyContent: 'space-between',
});

export const ContactContainer = styled(flexibleRowDiv)({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BlobContainer = styled.div({
  position: 'absolute',
  alignSelf: 'center',
  zIndex: -10,
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '520px',
  bottom: 0,
});

export const Blob = styled(BottomBlob)({
  position: 'absolute',
  top: -450,
});

export const TopBlobContainer = styled(BlobContainer)({
  height: '100%',
  top: 0,
});

export const TopBlob = styled(BottomBlob)({
  position: 'absolute',
  bottom: -100,
});
