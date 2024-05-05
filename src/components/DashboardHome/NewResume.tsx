import { Box, Card, Group, Image, Menu, Modal, rem, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconAnalyze,
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
  IconUser,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/lib/store/store';
import { ResumeInfoInterface } from '@/lib/utils/interfaces';

import ResumeInfo from '@/components/ResumeInfo/ResumeInfo';

const NewResume = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const resumesInfoData = useSelector((state: RootState) => state.resume_info);

  console.log(resumesInfoData);

  return (
    <div style={{ display: 'flex' }}>
      {resumesInfoData.map((el: ResumeInfoInterface, index) => (
        <Card
          key={index}
          shadow='sm'
          padding='lg'
          radius='md'
          withBorder
          style={{
            maxWidth: rem(250),
            padding: rem(10),
            height: rem(300),
            margin: 12,
          }}
        >
          <Box
            style={{
              overflow: 'hidden',
              border: '1px dotted #777',
              borderRadius: 12,
              cursor: 'pointer',
            }}
            onClick={() => {
              router.push(`home/${el.uid}?type=personal`);
            }}
          >
            <Image
              src='data:image/jpeg;base64,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'
              // height={160}
              alt='Norway'
            />
          </Box>
          <Group style={{ justifyContent: 'space-between', margin: rem(5) }}>
            <Text>{el.resumeName}</Text>
            <Box>
              <Menu offset={4} closeDelay={300} trigger='click-hover'>
                <Menu.Target>
                  {/* <Button>Toggle menu</Button> */}
                  <IconDotsVertical
                    color='#777'
                    style={{ cursor: 'pointer' }}
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item
                    leftSection={
                      <IconEdit style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Edit
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <IconAnalyze
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Review
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <IconTrash style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Delete
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <IconUser style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Make Public
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Box>
          </Group>
        </Card>
      ))}
      <Card
        shadow='sm'
        padding='lg'
        radius='md'
        withBorder
        style={{
          maxWidth: rem(250),
          padding: rem(10),
          height: rem(300),
          // background: '#777',
          border: 'none',
          boxShadow: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 12,
        }}
      >
        <div
          style={{
            border: '1px solid #777',
            borderRadius: '50%',
            display: 'flex',
            cursor: 'pointer',
          }}
          // onClick={() => {
          //   router.push('/home/input?type=personal');
          // }}
          onClick={open}
        >
          <IconPlus size={40} style={{ margin: 12 }} />
        </div>
      </Card>
      <Modal
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        opened={opened}
        onClose={close}
        title='Resume Info'
      >
        <ResumeInfo />
      </Modal>
    </div>
  );
};
export default NewResume;
