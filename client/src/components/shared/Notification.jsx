import { palette, spacing } from '@/styles';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import media from '@/utils/media';

const notificationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.2,
    transition: { duration: 0.1 },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { ease: 'easeOut', duration: 0.15 },
  },
  hover: { scale: 1.05, transition: { duration: 0.1 } },
};

export default function Notification({ text, type }) {
  return (
    <Wrapper
      variants={notificationVariants} // Defined animation states
      whileHover="hover" // Animation on hover gesture
      initial="initial" // Starting animation
      animate="animate" // Values to animate to
      exit="exit" // Target to animate to when removed from the tree
      type={type}
    >
      <IconWrapper></IconWrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const colorVariants = props => {
  switch (props.type) {
    case 'error':
      return css`
        background: ${props.theme.colors.tint.red[500]};
      `;
    case 'warning':
      return css`
        background: ${props.theme.colors.tint.coral[600]};
      `;
    default:
      return css`
        background: ${props.theme.colors.tint.green[600]};
      `;
  }
};

const Wrapper = styled(motion.li)`
  position: relative;
  right: ${spacing[4]};
  top: ${spacing[6]};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 75vw;
  ${colorVariants}
  color: ${palette.dark.gray[700]};
  border-radius: 0.3em;
  ${media.tablet(css`
    right: ${spacing[8]};
    top: ${spacing[7]};
    width: 45vw;
  `)}
  ${media.laptop(css`
    right: ${spacing[10]};
    width: 35vw;
  `)}
  ${media.desktop(css`
    right: ${spacing[10]};
    width: 35vw;
  `)}
`;
const IconWrapper = styled.i``;
const Text = styled.span``;
