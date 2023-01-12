import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
type Props = {}

export default function Login({ }: Props) {
    const { data: session } = useSession()
    if (session) {
        return <>Welcome login {session.user?.email}
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