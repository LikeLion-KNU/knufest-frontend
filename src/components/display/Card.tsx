import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import { Text } from "../typography/Text";
import {
    SectionWrapper,
    TopSection,
    Photo,
    MemberInfo,
    MiddleSection,
    Description,
    BottomSection,
    Contact,
    IconLink,
} from "./Card.styled";

interface ICard {
    name: string;
    dept: string;
    role: string;
    photo: string;
    description: string[];
    contact: {
        instagram?: string;
        linkedin?: string;
        github?: string;
    };
    team: string;
}

const Card: React.FC<ICard> = ({ photo, name, dept, role, description, contact }) => {
    const instagramURL = contact.instagram ? `https://instagram.com/${contact.instagram}` : null;
    const linkedinURL = contact.linkedin ? `https://linkedin.com/in/${contact.linkedin}` : null;
    const githubURL = contact.github ? `https://github.com/${contact.github}` : null;

    return (
        <>
            <SectionWrapper>
                <TopSection>
                    <Photo src={photo} alt="Profile Photo" />
                    <MemberInfo>
                        <Text size="m" weight="bold" variant="darkpurple">
                            {name}
                        </Text>
                        <Text size="xs" weight="bold" variant="lightpurple">
                            {dept}
                        </Text>
                        <Text size="xs" weight="bold" variant="lightpurple">
                            {role}
                        </Text>
                    </MemberInfo>
                </TopSection>
                <MiddleSection>
                    <Description>
                        {description.map((item, index) => (
                            <li key={index}>
                                <Text size="xs" weight="normal" variant="lightpurple">
                                    {item}
                                </Text>
                            </li>
                        ))}
                    </Description>
                </MiddleSection>
                <BottomSection>
                    <Contact>
                        {instagramURL && (
                            <IconLink href={instagramURL} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                                <Text size="xxs" weight="normal">
                                    {contact.instagram}
                                </Text>
                            </IconLink>
                        )}
                        {linkedinURL && (
                            <IconLink href={linkedinURL} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                                <Text size="xxs" weight="normal">
                                    {contact.linkedin}
                                </Text>
                            </IconLink>
                        )}
                        {githubURL && (
                            <IconLink href={githubURL} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                                <Text size="xxs" weight="normal">
                                    {contact.github}
                                </Text>
                            </IconLink>
                        )}
                    </Contact>
                </BottomSection>
            </SectionWrapper>
        </>
    );
};

export default Card;
