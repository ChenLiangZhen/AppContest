import React from "react";
import {SafeAreaView, View} from "react-native";

export const BaseLayout = ({children, ...props}) => {
	return(
		<SafeAreaView style={{
			flex: 1,
			...props
		}}>
			{children}
		</SafeAreaView>
	)
}

export const HStack = ({children, ...props}) => {
	return(
		<View
			style={{
				flexDirection: "row",
				...props
			}}
		>
		</View>
	)
}

export const VStack = ({children, ...props}) => {
	return(
		<View
			style={{
				flexDirection: "column",
				...props
			}}
		>
		</View>
	)
}