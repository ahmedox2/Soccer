import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Transfer {
  name: string;
  img: string;
  team: string;
  teamLogo: string;
  fee: string;
  from: string;
  position: string;
  contract: string;
  marketValue: string;
  date: string;
}

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent {
  private fromTeamLogos: { [key: string]: string } = {
    'Chelsea': 'https://images.fotmob.com/image_resources/logo/teamlogo/8455_xsmall.png',
    'Liverpool': 'https://images.fotmob.com/image_resources/logo/teamlogo/8650_xsmall.png',
    'Kasimpasa': 'https://images.fotmob.com/image_resources/logo/teamlogo/8592_xsmall.png',
    'Man City': 'https://images.fotmob.com/image_resources/logo/teamlogo/8456_xsmall.png',
    'Fulham': 'https://images.fotmob.com/image_resources/logo/teamlogo/9879_xsmall.png',
    'Free Agent': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png',
    'Wolves': 'https://images.fotmob.com/image_resources/logo/teamlogo/8602_xsmall.png',
    'Southampton': 'https://images.fotmob.com/image_resources/logo/teamlogo/8466_xsmall.png',
    'Nottm Forest': 'https://images.fotmob.com/image_resources/logo/teamlogo/10203_xsmall.png',
    'Reading': 'https://images.fotmob.com/image_resources/logo/teamlogo/8246_xsmall.png',
    'Brighton': 'https://images.fotmob.com/image_resources/logo/teamlogo/10204_xsmall.png',
    'Man United': 'https://images.fotmob.com/image_resources/logo/teamlogo/10260_xsmall.png',
    'Arsenal': 'https://images.fotmob.com/image_resources/logo/teamlogo/9825_xsmall.png',
    'Aston Villa': 'https://images.fotmob.com/image_resources/logo/teamlogo/10252_xsmall.png'
  };

  transfers: Transfer[] = [
    {
      name: 'Deivid Washington',
      img: 'https://images.fotmob.com/image_resources/playerimages/1458868.png',
      team: 'Santos FC',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8514_xsmall.png',
      fee: 'On Loan',
      from: 'Chelsea',
      position: 'ST',
      contract: 'Feb 2025 - Dec 2025',
      marketValue: '€10M',
      date: 'Feb 21, 2025'
    },
    {
      name: 'James Norris',
      img: 'https://images.fotmob.com/image_resources/playerimages/1096696.png',
      team: 'Shelbourne',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/5751_xsmall.png',
      fee: 'On Loan',
      from: 'Liverpool',
      position: 'LB',
      contract: 'Feb 2025 - Nov 2025',
      marketValue: '€20K',
      date: 'Feb 17, 2025'
    },
    {
      name: 'Yasin Özcan',
      img: 'https://images.fotmob.com/image_resources/playerimages/1393980.png',
      team: 'Aston Villa',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10252_xsmall.png',
      fee: '€7M',
      from: 'Chelsea',
      position: 'CB',
      contract: 'Jul 2025 - Jun 2029',
      marketValue: '€4.8M',
      date: 'Feb 10, 2025'
    },
    {
      name: 'Kayky',
      img: 'https://images.fotmob.com/image_resources/playerimages/1244631.png',
      team: 'Bahia',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/7877_xsmall.png',
      fee: 'On Loan',
      from: 'Man City',
      position: 'RW',
      contract: 'Feb 2025 - Dec 2025',
      marketValue: '€6.5M',
      date: 'Feb 8, 2025'
    },
    {
      name: 'Kristian Sekularac',
      img: 'https://images.fotmob.com/image_resources/playerimages/1417675.png',
      team: 'Fehervar FC',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8036_xsmall.png',
      fee: '',
      from: 'Fulham',
      position: 'AM',
      contract: 'Feb 2025 - Undisclosed',
      marketValue: '€250K',
      date: 'Feb 8, 2025'
    },
    {
      name: 'Willian',
      img: 'https://images.fotmob.com/image_resources/playerimages/94086.png',
      team: 'Fulham',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9879_xsmall.png',
      fee: 'Free Transfer',
      from: 'Free Agent',
      position: 'LW',
      contract: 'Feb 2025 - Jun 2025',
      marketValue: '€3M',
      date: 'Feb 7, 2025'
    },
    {
      name: 'Fabian Mrozek',
      img: 'https://images.fotmob.com/image_resources/playerimages/1384210.png',
      team: 'Forest Green',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9828_xsmall.png',
      fee: 'On Loan',
      from: 'Liverpool',
      position: 'GK',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€250K',
      date: 'Feb 6, 2025'
    },
    {
      name: 'Mario Lemina',
      img: 'https://images.fotmob.com/image_resources/playerimages/421786.png',
      team: 'Galatasaray',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8637_xsmall.png',
      fee: '€2.5M',
      from: 'Wolves',
      position: 'CM',
      contract: 'Feb 2025 - Jun 2026',
      marketValue: '€7M',
      date: 'Feb 6, 2025'
    },
    {
      name: 'Joe O\'Brien Whitmarsh',
      img: 'https://images.fotmob.com/image_resources/playerimages/1437326.png',
      team: 'Accrington',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8671_xsmall.png',
      fee: 'On Loan',
      from: 'Southampton',
      position: 'CM',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€20K',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Tyler Bindon',
      img: 'https://images.fotmob.com/image_resources/playerimages/1524716.png',
      team: 'Reading',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8246_xsmall.png',
      fee: 'On Loan',
      from: 'Nottm Forest',
      position: 'CB',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€950K',
      date: 'Feb 5, 2025'
    },
    
    {
      name: 'Ed Turns',
      img: 'https://images.fotmob.com/image_resources/playerimages/1188024.png',
      team: 'Exeter',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9833_xsmall.png',
      fee: '',
      from: 'Brighton',
      position: 'CB',
      contract: 'Feb 2025 - Jun 2027',
      marketValue: '€450K',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Tyrell Malacia',
      img: 'https://images.fotmob.com/image_resources/playerimages/865118.png',
      team: 'PSV Eindhoven',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8640_xsmall.png',
      fee: 'On Loan',
      from: 'Man United',
      position: 'LWB',
      contract: 'Feb 2025 - Jun 2025',
      marketValue: '€16M',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Dexter Lembikisa',
      img: 'https://images.fotmob.com/image_resources/playerimages/1350598.png',
      team: 'Barnsley',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8283_xsmall.png',
      fee: 'On Loan',
      from: 'Wolves',
      position: 'RM',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€3.5M',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Adam Armstrong',
      img: 'https://images.fotmob.com/image_resources/playerimages/519835.png',
      team: 'West Brom',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8659_xsmall.png',
      fee: 'On Loan',
      from: 'Southampton',
      position: 'ST',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€20M',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Jayden Danns',
      img: 'https://images.fotmob.com/image_resources/playerimages/1416696.png',
      team: 'Sunderland',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8472_xsmall.png',
      fee: 'On Loan',
      from: 'Liverpool',
      position: 'ST',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€950K',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Sil Swinkels',
      img: 'https://images.fotmob.com/image_resources/playerimages/1197533.png',
      team: 'Bristol Rovers',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10104_xsmall.png',
      fee: 'On Loan',
      from: 'Aston Villa',
      position: 'CB',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€200K',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Maldini Kacurri',
      img: 'https://images.fotmob.com/image_resources/playerimages/1531739.png',
      team: 'Bromley',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/45729_xsmall.png',
      fee: 'On Loan',
      from: 'Arsenal',
      position: 'CB',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€320K',
      date: 'Feb 5, 2025'
    },
    {
      name: 'Jacob Wright',
      img: 'https://images.fotmob.com/image_resources/playerimages/1460176.png',
      team: 'Norwich',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9850_xsmall.png',
      fee: 'On Loan',
      from: 'Man City',
      position: 'CM',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€820K',
      date: 'Feb 4, 2025'
    },
    {
      name: 'Zak Sturge',
      img: 'https://images.fotmob.com/image_resources/playerimages/1421813.png',
      team: 'Millwall',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10004_xsmall.png',
      fee: 'On Loan',
      from: 'Chelsea',
      position: 'LWB',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€230K',
      date: 'Feb 4, 2025'
    },
    {
      name: 'Harvey Vale',
      img: 'https://images.fotmob.com/image_resources/playerimages/1180500.png',
      team: 'QPR',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10172_xsmall.png',
      fee: '',
      from: 'Chelsea',
      position: 'LB',
      contract: 'Feb 2025 - Undisclosed',
      marketValue: '€1.6M',
      date: 'Feb 4, 2025'
    },
    {
      name: 'Kaide Gordon',
      img: 'https://images.fotmob.com/image_resources/playerimages/1362972.png',
      team: 'Portsmouth',
      teamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9988_xsmall.png',
      fee: 'On Loan',
      from: 'Liverpool',
      position: 'RW',
      contract: 'Feb 2025 - May 2025',
      marketValue: '€1.4M',
      date: 'Feb 4, 2025'
    }
  ];

  getFromTeamLogo(teamName: string): string {
    return this.fromTeamLogos[teamName] || '';
  }
}

