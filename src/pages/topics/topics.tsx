import { ChulaSSOData } from '@/interfaces/cusso.interface';
import { RootState } from '@/redux/store';
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

const Topics = lazy(() => import('@/components/Topics/TopicsGrid'))
const NavBar = lazy(() => import("@/components/Navbar/NavBar"));
const TopicGridLoading = lazy(() => import("@/components/Topics/TopicGridLoading"));

const TopicsPage = () => {

    const user = useSelector((state: RootState) => state.auth.user) as ChulaSSOData
    const { firstnameth, lastnameth, ouid } = user;

    return (
        <>
            <Stack bgColor="primary.500" minH="100svh">
                <NavBar />
                <Container maxW="container.md" my={{ base: 5, lg: 10 }}>
                    <Stack spacing={0}>
                        <Heading fontSize="2xl">สวัสดี! {ouid}</Heading>
                        <Heading fontSize="6xl" textShadow="3px 3px #fff" lineHeight="3.5rem">{firstnameth}</Heading>
                        <Heading fontSize="4xl" textShadow="3px 3px #fff" lineHeight="2rem">{lastnameth}</Heading>
                    </Stack>

                    <Text mt={10} fontSize="xl">เลือกเรื่องที่จะทำประชามติ</Text>

                    <Suspense fallback={<TopicGridLoading />}>
                        <Topics />
                    </Suspense>
                </Container>
            </Stack >
        </>
    )
}

export default TopicsPage