import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

type Props = {}

export default function Login({ }: Props) {
    let router = useRouter()
    // condition base redirecting
    function redirect() {
        router.push('/account')
    }
    const { data: session } = useSession()
    if (session) {
        return <>Welcome login {session.user?.email}
            <button onClick={() => redirect()}>Go to Dashboard</button>
            <button onClick={() => signOut()}>Sign out</button></>
    }
    else {
        return (
            <>
                <div><p>You are not signed in</p></div>
                <button onClick={() => signIn()}>Sign in</button>
            </>

        )
    }
}