import { useTranslation } from 'react-i18next';

const Error = () => {
	const { t } = useTranslation();
	return (
			<div>
				404{` `} 
				{t(`error.description`)}
			</div>
	);
};

export default Error;