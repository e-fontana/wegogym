import { Text, TouchableOpacity } from "react-native";
import * as Icons from './icons';

const icons = {
    add: <Icons.Add className="h-5 w-5" />,
    friends: <Icons.Friends className="h-5 w-5" />,
    home: <Icons.Home className="h-5 w-5" />,
    settings: <Icons.Settings  className="h-5 w-5"/>,
    weight: <Icons.Weight className="h-5 w-5" />
}

export const TaskbarElement = ({ title, icon }: { title: string, icon: 'add' | 'friends' | 'home' | 'settings' | 'weight' }) => {
    return (
        <TouchableOpacity className="w-1/4` h-full flex-col items-center justify-between py-4">
            { icons[icon] }
            <Text className="dark:text-white font-medium">{title}</Text>
        </TouchableOpacity>
    )
}