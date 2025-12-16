import { MapPinnedIcon, TagsIcon, UserRoundIcon } from "lucide-react";
import TagItem from "./TagItem";

const UserInfo = () => {
    return (
        <div className="p-4! mb-4! w-full box-border rounded-xl"
            style={{
                backgroundColor: 'var(--chat-board-bg)',
                color: 'var(--font-color-focus)'
            }}
        >
            <div>
                <div className="flex items-center text-[1rem]">
                    <div className="w-4 flex items-center justify-center mr-4!">
                        <UserRoundIcon size={20} />
                    </div>
                    <div className="mr-2!">女生</div>
                    <div className="">26岁以上</div>
                </div>

                <div className="flex items-center text-[1rem] mt-1!">
                    <div className="w-4 flex items-center justify-center mr-4!">
                        <MapPinnedIcon size={20} />
                    </div>
                    <div className="mr-2!">山东省</div>
                </div>

                <div className="flex items-center text-[1rem] mt-1!">
                    <div className="w-4 flex items-center justify-center mr-4!">
                        <TagsIcon size={20} />
                    </div>
                    <div className="flex flex-row items-center">
                        <TagItem label="反差er" />
                        <TagItem label="已婚人士" />
                        <TagItem label="手艺人" />
                    </div>
                </div>
            </div>

            <div
                className="mt-3! p-2! rounded-sm flex flex-col"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, .38)',
                    color: 'var(--font-color-hint1)',
                    fontSize: '.66rem'
                }}
            >
                <span>绿色聊天，遵守秩序，本站24H进行举报内容审核</span>
                <span>你正处于清流模式中，对方如发送敏感词将被屏蔽并处罚</span>
            </div>
        </div>
    );
}

export default UserInfo;