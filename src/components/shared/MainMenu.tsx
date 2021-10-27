import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HyperThemeEditor } from '@hypertheme-editor-pro/chakra-ui';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import React from 'react';
import { FaGlobeAfrica } from 'react-icons/fa';
import { Link as ReactLink, NavLink } from 'react-router-dom';
import { C_DarkGray, homeURL, Primary, Routes } from '../../Const';
import { ColorModeSwitcher } from '../../logic/ColorModeSwitcher';
import { dynamicActivate, gerUserLocale, locales } from '../../translations/i18n';

interface FeatureProps extends BoxProps {}

export const LanguageSelector = (props: FeatureProps) => {
  const popoverContentBgColor = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box alignSelf="center" {...props}>
      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Button aria-label="" paddingInline="0.5rem" fontSize="lg" variant="ghost" leftIcon={<FaGlobeAfrica />}>
            {' '}
            {gerUserLocale().toUpperCase()}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          border={0}
          boxShadow={'xl'}
          // bg={popoverContentBgColor}
          rounded={'xl'}
          width={'100%'}
          minW={10}>
          <Stack>
            {Object.keys(locales).map((key) => (
              <Box
                key={key}
                role={'group'}
                display={'block'}
                _hover={{ background: popoverContentBgColor }}
                p={2}
                px={5}
                rounded={'xl'}
                onClick={() => {
                  dynamicActivate(key);
                }}>
                <Text transition={'all .3s ease'} fontSize={'2xl'}>
                  {locales[key][1]}
                </Text>
              </Box>
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export const MenuWithSubnavigation = (props: FeatureProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const color = Primary();

  return (
    <Box position={{ md: 'sticky' }} top={0} width="100%" zIndex="100" {...props}>
      <Flex
        bg={useColorModeValue('gray.50', 'gray.600')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 2 }} justify={{ base: 'center', md: 'start' }}>
          <Link fill={color} as={ReactLink} to={`${homeURL}/`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="208" height="31" viewBox="0 0 1141.25 250.2">
              <defs>
                <style>.cls-2{`{fill:#fff;}`}</style>
              </defs>
              <title>Logo</title>
              <g id="Ebene_2" data-name="Ebene 2">
                <g id="Ebene_1-2" data-name="Ebene 1">
                  <ellipse className="cls-1" cx="125" cy="125" rx="123" ry="123" />
                  <path
                    className="cls-2"
                    d="M106.73,1.33C76.42,10.85,69.82,39.94,80.38,63.16c1.91,4.18,5.1,7.77,7.77,11.75a4.45,4.45,0,0,1-.66.48A57.22,57.22,0,0,0,68.66,93.28c-9.8,14.69-11.16,30.36-4.42,46.58,4.24,10.23,12.11,17.42,21.74,22.31,10.11,5.14,20.64,9.47,31,14.05,7.08,3.12,14.23,6,20.61,10.58,12.05,8.63,11.47,26.31,5.23,34-5.4,6.69-12.84,9-20.91,9.71-15.16,1.32-28.88-2.88-41.4-11.39A17.81,17.81,0,0,0,76.26,217c-2.54-.86-4.27,0-5.11,2.55a17.34,17.34,0,0,0-.93,4.49c-.4,7.82-.26,11.62,2,14.47a125.1,125.1,0,0,0,66,11,64.8,64.8,0,0,0,10.51-3.85c26.76-12.55,30.62-41.89,21.46-60.69-2-4.05-5-7.58-7.54-11.26,3.18-2.56,6.75-5.09,9.91-8.06,10.45-9.84,17-21.61,17.37-36.33.4-16.52-6-29.65-19.52-39.2-7.69-5.44-16.23-9.27-24.87-12.92-8.38-3.54-16.89-6.86-25-10.9-9.09-4.52-16-11-17.31-22-1.28-10.48,3.08-19,12.86-23,9.26-3.8,18.78-3.18,28,0,5.73,2,11.06,5.16,16.43,8.05,3.85,2.07,6.09,1.48,6.82-2.82a66.77,66.77,0,0,0,.6-10.6c.05-5.2-2.65-8.62-7.3-10.66L160.2,5A124.74,124.74,0,0,0,125,0,126.43,126.43,0,0,0,106.73,1.33Zm-1.29,86.9a3.81,3.81,0,0,1,2.82-.23c10,4.28,20,8.53,29.88,13.08a98,98,0,0,1,14,7.68c11.61,7.85,12.95,22.09,8.52,34.12a30.07,30.07,0,0,1-15.92,17.41,3.66,3.66,0,0,1-2.61.21c-9.83-4.23-19.69-8.41-29.4-12.92a101.24,101.24,0,0,1-14.56-8.07c-7.42-5.09-11.05-12.43-10.84-21.59C87.76,104.65,93.29,94.39,105.44,88.23Z"
                  />
                  <path
                    className="cls-1"
                    d="M336.54,177.38q0,27-13.17,40t-40,13.17l-1.83-24.05a49.71,49.71,0,0,0,11.8-2.06,18.4,18.4,0,0,0,8.13-5.16,21.79,21.79,0,0,0,4.69-9.16,57.23,57.23,0,0,0,1.49-14.31V70.41h28.86Zm2.52-142.47q0,7.56-4.81,12a18.72,18.72,0,0,1-24.28,0q-4.82-4.45-4.81-12,0-7.78,4.81-12.26a18.75,18.75,0,0,1,24.28,0Q339.06,27.12,339.06,34.91Z"
                  />
                  <path
                    className="cls-1"
                    d="M459.77,182H433.43v-12.6H433a62.15,62.15,0,0,1-4.12,4.7,33.83,33.83,0,0,1-6.3,5,37,37,0,0,1-9.05,4,43,43,0,0,1-12.37,1.6q-17.86,0-27-11.22t-9.16-32.3V70.41H393.8v65.74q0,12.82,4,18.32t13.4,5.5a26.83,26.83,0,0,0,11.8-2.29,32.08,32.08,0,0,0,7.9-5.27v-82h28.86Z"
                  />
                  <path
                    className="cls-1"
                    d="M548.41,98.81c-.76-.6-1.87-1.37-3.32-2.29a49.83,49.83,0,0,0-5-2.74,34.07,34.07,0,0,0-6.64-2.3,35,35,0,0,0-8.13-.91q-7.34,0-11.11,2.29t-3.78,5.5a8.46,8.46,0,0,0,3.32,7,67.73,67.73,0,0,0,11.11,6.53l6.64,3.21A121.83,121.83,0,0,1,543,121.61a40.77,40.77,0,0,1,8.82,7.55,33.27,33.27,0,0,1,5.73,9.4,32.29,32.29,0,0,1,2.06,12q0,15.58-10.65,24.85t-31.5,9.28a62.2,62.2,0,0,1-13.28-1.26,65.88,65.88,0,0,1-10.08-3,35.42,35.42,0,0,1-7.33-3.78,51.76,51.76,0,0,1-5-3.89l8.93-23.36q1.6,1.6,4.12,3.66a34.17,34.17,0,0,0,5.84,3.78,46.69,46.69,0,0,0,7.33,3,28.55,28.55,0,0,0,8.59,1.26q7.33,0,11.8-2.18t4.47-6.07a9.62,9.62,0,0,0-.92-4.35,10.87,10.87,0,0,0-2.86-3.44,29.66,29.66,0,0,0-5-3.2c-2.06-1.07-4.55-2.37-7.45-3.9l-6.64-3.43q-11.69-5.73-18.44-13.63t-6.75-21.19a29.35,29.35,0,0,1,3-13.28,28.81,28.81,0,0,1,8.36-10.08A40.9,40.9,0,0,1,508.67,70a52.65,52.65,0,0,1,15.92-2.29,57.75,57.75,0,0,1,12.14,1.15,50.9,50.9,0,0,1,9,2.75,36.82,36.82,0,0,1,6.3,3.32c1.68,1.14,3,2.1,3.89,2.86Z"
                  />
                  <path
                    className="cls-1"
                    d="M642.32,93.32H616.67v45.12q0,12.38,3.43,16.95T631.56,160a29.05,29.05,0,0,0,7.1-.8c2.13-.53,3.66-.95,4.58-1.26l2.06,21.3c-1.22.61-3.47,1.61-6.76,3s-8.13,2.06-14.54,2.06A50.38,50.38,0,0,1,607.85,182a25.18,25.18,0,0,1-11.22-7.44A33,33,0,0,1,590,161.23a78.79,78.79,0,0,1-2.17-20V93.32H572.69V73.62l15.12-2.75L591,39.72h25.66V70.41h28.17Z"
                  />
                  <path
                    className="cls-1"
                    d="M696.61,34.91q0,7.56-4.7,12a16.73,16.73,0,0,1-12,4.47q-7.56,0-12.26-4.47t-4.69-12q0-7.78,4.69-12.26t12.26-4.46a16.76,16.76,0,0,1,12,4.46Q696.61,27.12,696.61,34.91ZM694.32,182H665.46V70.41h28.86Z"
                  />
                  <path
                    className="cls-1"
                    d="M799.45,87.36,755,158.6v.46h48.1L800.6,182H717V165l46.27-71.23v-.46H720V70.41h79.48Z"
                  />
                  <path
                    className="cls-1"
                    d="M924.74,123.55a87.37,87.37,0,0,1-3.66,26.57,51.75,51.75,0,0,1-10.43,19,43.76,43.76,0,0,1-16.26,11.46,55.54,55.54,0,0,1-21.19,3.89,44.18,44.18,0,0,1-11.33-1.26,33.46,33.46,0,0,1-7.91-3.09v47.64H825.1V70.41h26.57V82.78h.46A31.12,31.12,0,0,1,856,78.2a34.54,34.54,0,0,1,6.41-4.92,39.06,39.06,0,0,1,9-4,39.59,39.59,0,0,1,11.79-1.61,40.77,40.77,0,0,1,16.84,3.44,35.15,35.15,0,0,1,13.17,10.31,48.75,48.75,0,0,1,8.47,17.4A91.37,91.37,0,0,1,924.74,123.55ZM872.52,92.4a28,28,0,0,0-11,1.95A30,30,0,0,0,854,98.81v58.87a23.89,23.89,0,0,0,6,2.64,28.25,28.25,0,0,0,8,1q13,0,20.15-8.48t7.1-27.94q0-17.64-6.18-25.08T872.52,92.4Z"
                  />
                  <path
                    className="cls-1"
                    d="M1045.68,126.07q0,14.9-4.35,25.88a52.84,52.84,0,0,1-11.57,18.21A47.84,47.84,0,0,1,1013.15,181a52.94,52.94,0,0,1-19.46,3.67,55.61,55.61,0,0,1-19.7-3.44,42.5,42.5,0,0,1-16-10.65,50.09,50.09,0,0,1-10.76-18.32q-3.9-11.12-3.9-26.23,0-14.65,4.35-25.65a54.16,54.16,0,0,1,11.57-18.33,46,46,0,0,1,16.61-10.88,54.76,54.76,0,0,1,19.47-3.55,56.59,56.59,0,0,1,19.81,3.44,41.9,41.9,0,0,1,16,10.54,50,50,0,0,1,10.65,18.21Q1045.68,111,1045.68,126.07Zm-29.55,0a62.15,62.15,0,0,0-1.72-15.69,29.41,29.41,0,0,0-4.69-10.42,18.82,18.82,0,0,0-6.87-5.73,19.19,19.19,0,0,0-8.25-1.83q-8.93,0-15.35,7.79t-6.41,25.88q0,18.56,6.41,26.23T994.6,160a19.9,19.9,0,0,0,8.36-1.83,17,17,0,0,0,6.87-6,33.47,33.47,0,0,0,4.58-10.53A60.8,60.8,0,0,0,1016.13,126.07Z"
                  />
                  <path
                    className="cls-1"
                    d="M1131.34,94.46a9.4,9.4,0,0,0-2.86-.91,27.71,27.71,0,0,0-5.61-.46q-9.61,0-15.58,3.43a25.6,25.6,0,0,0-8.93,8V182H1069.5V70.41h26.57V86h.46a38.35,38.35,0,0,1,10.19-12.6q6.3-5,17.52-5a40.25,40.25,0,0,1,5.62.34c1.6.23,2.78.43,3.55.58Z"
                  />
                  <path
                    className="cls-1"
                    d="M1211.74,93.32h-25.65v45.12q0,12.38,3.43,16.95T1201,160a29,29,0,0,0,7.1-.8q3.21-.79,4.59-1.26l2.06,21.3c-1.23.61-3.48,1.61-6.76,3s-8.13,2.06-14.55,2.06a50.36,50.36,0,0,1-16.14-2.29,25.27,25.27,0,0,1-11.23-7.44,33,33,0,0,1-6.64-13.29,78.75,78.75,0,0,1-2.18-20V93.32h-15.11V73.62l15.11-2.75,3.21-31.15h25.66V70.41h28.17Z"
                  />
                  <path
                    className="cls-1"
                    d="M1228.69,151.27a27.89,27.89,0,0,1,4-15.12,32,32,0,0,1,10.88-10.54,53.75,53.75,0,0,1,16.14-6.18,92.06,92.06,0,0,1,20-2.06h4.58v-3.9q0-21.75-18.78-21.76a35.32,35.32,0,0,0-9.4,1.15,38.93,38.93,0,0,0-7.44,2.86,40.29,40.29,0,0,0-5.73,3.55,39.77,39.77,0,0,0-3.78,3.21l-8.93-18.32q2.07-2.07,5.5-4.93a43.71,43.71,0,0,1,8.47-5.38,63.53,63.53,0,0,1,11.8-4.35,59.27,59.27,0,0,1,15.46-1.84q19.7,0,30.24,11.23t10.53,35.5V152q0,9.63.57,17.18t1.26,12.83h-26.57c-.15-1.68-.3-3.62-.45-5.84s-.23-4.39-.23-6.53h-.46a37.8,37.8,0,0,1-3.55,5.27,24.83,24.83,0,0,1-5.27,4.92,26.5,26.5,0,0,1-7.44,3.55,34.31,34.31,0,0,1-10.31,1.38q-13.74,0-22.45-9.16T1228.69,151.27Zm39.39,11q6.2,0,10-2.17a30,30,0,0,0,6.3-4.7V134.78l-5.73.22q-11.22.69-16.95,3.78a10.32,10.32,0,0,0-5.72,9.74,14.35,14.35,0,0,0,3.43,9.85A11.08,11.08,0,0,0,1268.08,162.26Z"
                  />
                  <path
                    className="cls-1"
                    d="M1369.33,146q0,8.92,2.29,12t7.56,3.1a20,20,0,0,0,5.15-.58,29.32,29.32,0,0,0,3.32-1l1.83,20.16a34.17,34.17,0,0,1-6.64,2.75,40.79,40.79,0,0,1-12.6,1.6,42.36,42.36,0,0,1-12.48-1.72,21.12,21.12,0,0,1-9.39-5.72,26.85,26.85,0,0,1-5.84-10.54,53.12,53.12,0,0,1-2.07-15.92V20.48L1369.33,18Z"
                  />
                </g>
              </g>
            </svg>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          {/* <ColorModeSwitcher alignSelf="center" justifySelf="flex-end" display={{ base: 'none', md: 'flex' }} /> */}
          <LanguageSelector />
          <Button display="none" colorScheme="primary">
            Anmelden
          </Button>
          {/* <HyperThemeEditor display={{ base: 'none', md: 'flex' }} /> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const greenHex = Primary();

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                padding={2}
                as={NavLink}
                to={`${homeURL}${navItem.href}` ?? '#'}
                fontSize={'lg'}
                fontWeight={'normal'}
                color={linkColor}
                // activeStyle={{
                //   borderBottom: 'solid',
                //   borderBottomWidth: 4,
                //   borderBottomColor: greenHex,
                // }}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  borderBottom: 'solid',
                  borderBottomWidth: 4,
                  borderBottomColor: greenHex,
                }}>
                {i18n._(navItem.label)}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      as={ReactLink}
      to={`${homeURL}${href}`}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.700')}>
      <Stack p={4} display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>

      <Box display="flex" alignItems="center" width="100%" height="auto" borderTop="1px solid gray">
        <Spacer flex={1} />
        <Text>Dark mode:</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    </Box>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={NavLink}
        to={`${homeURL}${href}` ?? '#'}
        justify={'space-between'}
        align={'center'}
        // activeStyle={{
        //   borderBlock: 'solid',
        //   borderBlockWidth: 2,
        //   borderBlockColor: greenHex,
        //   marginBlock: -2,
        // }}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight="bold">{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={C_DarkGray()} align={'start'}>
          {children &&
            children.map((child) => (
              <Link as={ReactLink} key={child.label} py={2} to={`${homeURL}${child.href}`}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: t`Lösungsfinder`,
  //   href: '/' + Routes.SolutionExplorer,
  // },
  // {
  //   label: t`Beratungsangebote`,
  //   href: '/' + Routes.ConsultationOffers,
  // },
  {
    label: '🏎',
    href: '/short',
    children: [
      {
        label: '🦠',
        href: '/' + Routes.PossibleEntitlements + '?id=ceybyumxibs0',
      },
      {
        label: '🛩',
        href: '/' + Routes.PossibleEntitlements + '?id=cf4hcjzx9bk0',
      },
    ],
  },
];
