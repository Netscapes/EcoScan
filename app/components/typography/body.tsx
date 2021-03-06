import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { withTheme } from '@/theme/theme-context';
import { ITypeComponentProps } from '@/types';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

function Body({
  dark, children, style, themeProp,
}: ITypeComponentProps) {
  const { theme } = themeProp;

  return (
    <Text style={[
      styles.text,
      dark ? { color: theme.colors.textContrast } : { color: theme.colors.text },
      { ...style },
    ]}
    >
      {children}
    </Text>
  );
}

Body.defaultProps = {
  dark: false,
  style: {},
};

export default withTheme(Body);
