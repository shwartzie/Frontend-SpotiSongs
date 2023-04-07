import React from 'react';

type SongTitleProps = {
	songName: string;
	authors?: any;
};

export const SongTitle = ({ songName, authors }: SongTitleProps) => {
	return (
		<div className="footer-song">
			<div className="footer-song-title-container">
				<span className="footer-song-name">
					<a> {songName}</a>
				</span>

				<div className="footer-song-authors">
					{authors && (
						<span>
							<a>{authors[0].name}</a>
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
