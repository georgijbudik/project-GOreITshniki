import Button from 'components/Button';
import { UserSvgLogout } from './Header.styled';

export function Header() {
  return (
    <div>
      <Button type="button" secondary paddingY={12} paddingX={12}>
        Logout
        <UserSvgLogout width="20" height="20" stroke="#E6533C">
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-log-out'
            }
          ></use>
        </UserSvgLogout>
      </Button>
    </div>
  );
}
