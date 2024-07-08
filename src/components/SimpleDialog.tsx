import { View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

interface SimpleDialogProps {
  visibility: boolean;
  setDialogVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  buttonContent: string;
}

export function SimpleDialog(props: SimpleDialogProps) {
  return (
    <View>
      <Portal>
        <Dialog
          visible={props.visibility}
          onDismiss={() => props.setDialogVisibility(false)}
          style={{ alignItems: "center", borderRadius: 15 }}
        >
          <Dialog.Icon icon="alert"></Dialog.Icon>
          <Dialog.Content>
            <Text variant="bodyLarge" style={{ paddingTop: 10 }}>
              {props.content}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              textColor="white"
              onPress={() => props.setDialogVisibility(false)}
            >
              {props.buttonContent}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
