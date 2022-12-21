import {Button as NativeBaseButton, IButtonProps} from 'native-base'

type Props = IButtonProps & {
    title: string
    variant?: 'outline' | 'solid'
}

export function Button({title, variant= 'solid', ...rest}: Props) {
    return (
        <NativeBaseButton
            w="full"
            h={14}
            bg={variant === 'outline' ? 'transparent' : "green.700"}
            borderWidth={variant === 'outline' ? 1 : 0}
            borderColor="green.500"
            rounded="sm"
            _pressed={{
                bg: variant === 'outline' ? "gray.500" : "green.500"
            }}
            _text={{
                color: variant === "outline" ? "green.500" : "white",
                fontFamily: "heading",
                fontSize: "sm"
            }}
            {...rest}
            onPress={()=>{
                console.log('hello')
            }}
        
        >
            {title}
        </NativeBaseButton>
        
    )
}