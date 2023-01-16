import React from 'react';
import { Dropdown, Stack, Spinner } from 'react-bootstrap';
import { getAccount, accountBalance, logout } from '../utils/near';

const symbol = 'NEARs';

const Wallet = () => {
  const [balance, setBalance] = React.useState('0');

  const address = getAccount().accountId;

  const getBalance = React.useCallback(async () => {
    if (address) {
      setBalance(await accountBalance());
    }
  }, [address]);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  const onClickLogout = () => {
    logout();
  };

  if (address) {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            align="end"
            id="dropdown-basic"
            className="d-flex align-items-center border rounded-pill py-1"
          >
            {balance ? (
              <>
                {balance} <span className="ms-1"> {symbol}</span>
              </>
            ) : (
              <Spinner animation="border" size="sm" className="opacity-25" />
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu className="shadow-lg border-0">
            <Dropdown.Item
              href={`https://explorer.testnet.near.org/accounts/${address}`}
              target="_blank"
            >
              <Stack direction="horizontal" gap={2}>
                <i className="bi bi-person-circle fs-4" />
                <span className="font-monospace">{address}</span>
              </Stack>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item
              as="button"
              className="d-flex align-items-center"
              onClick={() => onClickLogout()}
            >
              <i className="bi bi-box-arrow-right me-2 fs-4" />
              Disconnect
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

  return null;
};

export default Wallet;
