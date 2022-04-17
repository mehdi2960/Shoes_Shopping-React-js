import React from 'react'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import CodeModal from './CodeModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import ChangePasswordModal from './ChangePasswordModal'

export default function Index() {
  return (
    <>
        <SignInModal/>
        <SignUpModal/>
        <ForgetPasswordModal/>
        <ChangePasswordModal/>
        <CodeModal/>
    </>
  )
}
