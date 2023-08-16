//REACT
import { Pressable, Keyboard, Platform } from 'react-native'
//STYLES && ICONS
import {
  SignInContainer,
  Title,
  TitleBold,
  Line1,
  LinesContainer,
  TextOU,
  TouchableWithoutFeedback,
  ScrollView,
} from './styles'
import { Fontisto, Feather } from '@expo/vector-icons'
//COMPONENTS
import { ControlledInput } from '../../components/ControlInput'

//HOOK FORM
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
//THEME
import { useTheme } from 'styled-components'
//SCHEMA
import { schema } from './validators/schema'
//TYPES
import { UserSignInput } from './interfaces/interfaces'
//CONTROLLER
import { useSignInController } from './controllers/signin.controller'
import { Buttons } from '../../components/Button'
import React, {useState} from 'react'


const defaultForm: UserSignInput = {
  email: '',
  password: '',
}

export function SignIn() {

  const { COLORS } = useTheme()

  const { handleSignIn, handleSignUp } = useSignInController()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: defaultForm,
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <SignInContainer
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        >
          <Title>
            Sou<TitleBold>Junior</TitleBold>
          </Title>
          <Title type="subtitle">Entrar</Title>

          <ControlledInput
            control={control}
            name="email"
            placeholder="E-mail"
            placeholderTextColor={COLORS.TEXT}
            style={{ color: COLORS.TEXT }}
            keyboardType="email-address"
            error={errors.email}
          />

          <ControlledInput
            control={control}
            name="password"
            placeholder="Senha"
            placeholderTextColor={COLORS.TEXT}
            style={{ color: COLORS.TEXT }}
            icon="eye"
            secureTextEntry
            autoCorrect={false}
            clearTextOnFocus
            error={errors.password}  
          />

          <Buttons
            onPress={handleSubmit(handleSignIn as any)}
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="signin"
            title="Entrar"
          />

          <LinesContainer>
            <Line1 />
            <TextOU>OU</TextOU>
            <Line1 />
          </LinesContainer>

          <Buttons
            onPress={handleSubmit(handleSignIn as any)}
            type="anonymous"
            title="Criar conta"
            
          />

          <Pressable onPress={handleSignUp}>
            <Title type="signup">Criar conta</Title>
          </Pressable>
        </SignInContainer>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
